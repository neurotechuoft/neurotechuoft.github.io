import React from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

import SyntaxHighlighter from 'react-syntax-highlighter';
import {monokaiSublime} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './NeurostackDocs.scss';
import Sidebar from './Sidebar.js';
import Segment from './NS-docs-Segment.js';

function NeurostackDocs() {
  return(
    <div className="neurostack-docs">
      <Helmet>
        <title>Neurostack Docs</title>
      </Helmet>

      <Sidebar/>
      <div className="ns-docs-main">
        <div className="ns-docs-intro">
          <h1>Welcome to Neurostack!</h1>
          <p>Neurostack is a open-source Python library that provides a real-time EEG processing service on the cloud.</p>
          <p><a href = "https://github.com/neurotechuoft/Neurostack">View the source code here!</a></p>
        </div>

        <div className="ns-docs-getting-started">
          <h2>Getting Started</h2>

          <p>
          Neurostack runs in Python 3.6. We recommend working in a virtual environment (see Conda or venv). To install dependencies for the Neurostack client, 
          run <snippet>pip install -r requirements.txt</snippet>. To install dependencies for the Neurostack server, 
          run <snippet>pip install -r server_requirements.txt</snippet>
          </p>

          <p>
            <b>You can either run the Neurostack server locally, or you may choose to connect to our remote server.</b> To 
            start the Neurostack server locally, run <snippet>python start_server.py</snippet>. It will run on localhost:8001. 
            Alternatively, if you choose to connect to our remote server, it is currently being served on <snippet>neurostack.neurotechuoft.com:8001</snippet>
          </p>

          <p>
          To initialize on a client, run <snippit>python neurostack.py.</snippit> from the command line. This command takes 3 arguments: 
          </p>

          <p>
            <snippet>--address: ip:port to run Neurostack client on. Use localhost:8001 when serving locally, or neurostack.neurotechuoft.com:8002 when connecting to remote</snippet>
            <br/> <snippet>--server_address: ip:port for Neurostack server to connect to.</snippet>
            <br/> <snippet>--use_fake_data: Use flag to generate fake data.</snippet>
          </p>

          <p>Example usage:</p>
          
          <p>
            <snippet>python neurostack.py --server_address 
              localhost:8001 --address localhost:8002 --use_fake_data</snippet>
          </p>

          <p>
            <snippet>python neurostack.py --server_address 
              neurostack.neurotechuoft.com:8001 --address localhost:8002 --use_fake_data</snippet>
          </p>

        </div>

        <div className="ns-docs-tutorial">
          <h2>Tutorial</h2>
          <p>
            Neurostack allows you to send a job to the backend and recieve a reply in the form of a callback function.
            This short tutorial will walk through how to make a simple p_300 call to the Neurostack server.
          </p>
          
          <p>First, let's connect to the backend.</p>

          <SyntaxHighlighter className="code" language="python" style={monokaiSublime}>
            {"from socketIO_client import SocketIO\n" +
              "import time\n" +
              "import json\n\n" +

              "def callback_function(*args):\n" +
              "   print(args)\n\n" +

              "# p300 server running on localhost:8002\n" + 
              "client = SocketIO('neurostack.neurotechuoft.com', 8001)\n" +
              "client.connect()\n\n" +

              "# initialize event handlers\n" +
              "client.on('uuid', print_results)\n" +
              "client.on('p300_train', print_results)\n" +
              "client.on('p300_predict', print_results)\n" +
              "client.on('left_right_train', print_results)\n" +
              "client.on('left_right_predict', print_results)\n"}
          </SyntaxHighlighter>

          <p>
            We establish a connection to the server by calling <snippet>client = SocketIO('neurostack.neurotechuoft.com', 8001)</snippet>.
            This will connect to our remote server, although as previously mentioned, you also have the option to connect to a local server if one is running
            by calling <snippet>client = SocketIO('localhost', YOUR_PORT_HERE)</snippet>.
            Calling <snippet>client.connect()</snippet> will establish a WebSocket connection to the server.
            We are also creating 5 Socket.io event handlers to handle responses from the server. 
            For example, whenever the client recieves a 'p300_train' event from the server, it will call 'print_results' as a callback.
          </p>

          <p>Next, we need to generate a UUID. UUIDs are used by Neurostack as a unique identifier for this clien/t.</p>

          <SyntaxHighlighter className="code" language="python" style={monokaiSublime}>
            {"# Generate a UUID\n" +
              "client.emit('generate_uuid', None)\n" +
              "client.wait(seconds=1)\n"}
          </SyntaxHighlighter>

          <p>
            We send our Socket.io server an event called <snippet>generate_uuid</snippet>, 
            with <snippet>None</snippet> as an argument.

            The server will then reply with a <snippet>generate_uuid</snippet> event that will be picked up by 
            our <snippet>client.on('uuid', print_results)</snippet> event handler as previously defined.
            Finally, our <snippet>print_results</snippet> callback will be called, with the UUID as an argument.

            {/* <comment> //The user should be able to substitute print_results for their own callback?</comment> */}
          </p>

          <p>With our UUID ready, we can now send a prediction job:</p>

          <SyntaxHighlighter className="code" language="python" style={monokaiSublime}>
            {"uuid = 'YOUR_UUID_HERE'   # Universally unique ID for identification\n" +
              "timestamp = time.time()   # Timestamp of data\n\n" +

              "# Send a prediction job with the data at timestamp\n" +
              "args = json.dumps({\n" +
                  "'uuid': uuid,\n" +
                  "'timestamp': timestamp\n" +
              "})\n\n" +

              'client.emit("p300_predict", args)\n' +
              "client.wait(seconds=2)"}
          </SyntaxHighlighter>

          <p>
            We send a "p300_predict" event to the server along with <snippet>args</snippet>
            as the data we want to pass. Soon, the server will reply with it's own "p300_predict" event, which will be picked up
            by the client event handler we previously defined. Again, the <snippet>print_results</snippet>
            callback will be called, with the following arguments: your UUID, a bool <snippet>p300</snippet> 
            which is true if there is a prediced P300 ERP, and a float <snippet>score</snippet>, which is a 
            number between 0 and 1 denoting the confidence in our prediction.
          </p>

          <p>
            Finally, we can also send a training job to the server, so it can more accurately make p300 predictions later. 
            The process is largely similar to the one described previously.
          </p>

          <SyntaxHighlighter className="code" language="python" style={monokaiSublime}>
            {"p300 = True               # For training: True is P300, False is no P300\n\n" +

              "# Send a training job with the data at timestamp\n" +
              "args = json.dumps({\n" +
                  "'uuid': uuid,\n" +
                  "'timestamp': timestamp,\n" +
                  "'p300': p300\n" +
              "})\n\n" +

              'client.emit("p300_train", args)\n' +
              'client.wait(seconds=2)'}
          </SyntaxHighlighter>

          <p>

          </p>

        </div>

        <div className="ns-docs-websocketAPI">
          <h2>WebSocket API</h2>
          <p>
            Neurostack supports the following event API calls. 
            Each of these will emit back the results with the same event name.
          </p>
          
          <div className="ns-docs-generate_UUID">
            <Segment data = {GENERATE_UUID}/>
          </div>

          <div className="ns-docs-start-streaming-raw-data">
            <Segment data = {START_STREAMING_RAW_DATA}/>
          </div>

          <div className="ns-docs-stop-streaming-raw-data">
            <Segment data = {STOP_STREAMING_RAW_DATA}/>
          </div>

          <div className="ns-docs-p300-predict">
          <Segment data = {P300_PREDICT}/>

          </div>

          <div className="ns-docs-p300-train">
            <Segment data = {P300_TRAIN}/>
          </div>

          <div className="ns-docs-left-right-predict">
            <Segment data = {LEFT_RIGHT_PREDICT}/>
          </div>

          <div className="ns-docs-left-right-train">
            <Segment data = {LEFT_RIGHT_TRAIN}/>
          </div>

        </div>

      </div>
    </div>
  )
}

export default NeurostackDocs;

//API reference resources below
//These objects are passed to the Docs component as a prop

const GENERATE_UUID = {
  title: 'generate_uuid',
  description: "Generate a universally unique identifier.",
  example: "client.emit('generate_uuid', None)",
  parameters: {
    "None": ""
  },
  returns: {
    "uuid": "(str)|A universally unique identifier"
  }
}

const P300_PREDICT = {
  title: 'p300_predict',
  description: "Make a prediction the data at a timestamp.",
  example: "args = json.dumps({\n" +
            "'uuid': uuid,\n" +
            "'timestamp': timestamp\n" +
            "})\n\n" +

            'client.emit("p300_predict", args)',
  parameters: {
    "uuid": "(str)|The UUID of whoever is making a prediction. \
            This will determine which classifier we will load up and use.",
    "timestamp": "(float)|The timestamp of this chunk of data"
  },
  returns: {
    "uuid": "(str)|The UUID of the caller",
    "p300": "(bool)|True if there is a predicted P300 ERP",
    "score": "(float)|A value between 0 to 1 denoting the confidence in the prediction"
  }
}

const P300_TRAIN = {
  title: "p300_train",
  description: "Give a training example to the classifier.",
  example: "args = json.dumps({\n" +
            "'uuid': uuid,\n" +
            "'timestamp': timestamp,\n" +
            "'p300': p300\n" +
          "})\n\n" +

          'client.emit("p300_train", args)',
  parameters: {
    "uuid": "(str)|The UUID of whoever is making a prediction. \
            This will determine which classifier we will load up and use.",
    "timestamp": "(float)|The timestamp of this chunk of data",
    "p300": "(bool)|True if there should be a P300 ERP"
  },
  returns: {
    "uuid": "(str)|The UUID of the caller",
    "acc": "(Optional[float])|The accuracy of current classifier. \
            This is either None/null (not enough training samples for training), \
            or a float between 0 and 1."
  }
}

const LEFT_RIGHT_PREDICT = {
  title: "left_right_predict",
  description: "Make a prediction for whether the user is using their left or right brain at a timestamp.",
  example: "args = json.dumps({\n" +
            "'uuid': uuid,\n" +
            "'timestamp': timestamp,\n" +
          "})\n\n" +

          'client.emit("left_right_predict", args)',
  parameters: {
    "uuid": "(str)|The UUID of whoever is making a prediction. \
            This will determine which classifier we will load up and use.",
    "timestamp": "(float)|The timestamp of this chunk of data",
  },
  returns: {
    "uuid": "(str)|The UUID of the caller",
    "left": "(bool)|Either True or False, predicting whether the user is using their left (True) or right (False) brain.",
    "score": "(float)|A value from 0 to 1 denoting the confidence in the prediction"
  }
}

const LEFT_RIGHT_TRAIN = {
  title: "left_right_train",
  description: "Give a training example to the left/right brain classifier.",
  example: "args = json.dumps({\n" +
            "'uuid': uuid,\n" +
            "'timestamp': timestamp,\n" +
            "'left': True\n" +
          "})\n\n" +

          'client.emit("left_right_train", args)',
  parameters: {
    "uuid": "(str)|The UUID of whoever is making a prediction. \
            This will determine which classifier we will load up and use.",
    "timestamp": "(float)|The timestamp of this chunk of data",
    "left": "(bool)|True if using left brain, otherwise False if using right brain"
  },
  returns: {
    "uuid": "(str)|The UUID of the caller",
    "acc": "(Optional[float])|The accuracy of current classifier. \
            This is either None/null (not enough training samples for training), \
            or a float between 0 and 1."
  }
}

const START_STREAMING_RAW_DATA = {
  title: "start_streaming_raw_data",
  description: "Start streaming raw EEG data. Applications that want to use this should listen for the event raw_data, which Neurostack will continuously emit to.",
  example: "args = json.dumps({\n" +
            "'uuid': uuid,\n" +
          "})\n\n" +

          'client.emit("start_streaming_raw_data", args)',
  parameters: {
    "uuid": "(str)|UUID of whoever is wants to stream raw data. This will open up a raw data stream for this specific user.",
  },
  returns: {
    "None": ""
  }
}

const STOP_STREAMING_RAW_DATA = {
  title: "stop_streaming_raw_data",
  description: "Stop streaming raw EEG data.",
  example: "args = json.dumps({\n" +
            "'uuid': uuid,\n" +
          "})\n\n" +

          'client.emit("stop_streaming_raw_data", args)',
  parameters: {
    "uuid": "(str)|UUID of whoever is wants to stop streaming raw data.",
  },
  returns: {
    "None": ""
  }
}

