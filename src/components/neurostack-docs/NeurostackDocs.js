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
        </div>

        <div className="ns-docs-getting-started">
          <h2>Getting Started</h2>

          <p>
            Neurostack requires the SocketIO_client library. This dependency implements the 
            popular Socket.io library for Python.
          </p>

          {/* <comment>//Are there any other prerequisite dependencies?</comment> */}

          <p>
            Since Neurostack is built on top of Socket.io, you might find it
            useful to refer to their API reference.
          </p>

          <p>
          To start the Neurostack server, use <snippet>python start_server.py</snippet>. 
          It will run on localhost:8001. To initialize on a client, run
          <snippit>python neurostack.py.</snippit> from the command line. This command takes
          3 arguments: 
          </p>

          <p>
            <snippet>--address: ip: port to run Neurostack client on. The default is localhost:8002.</snippet>
            <br/> <snippet>--server_address: ip: port for Neurostack server to connect to.</snippet>
            <br/> <snippet>--use_fake_data: Use flag to generate fake data.</snippet>
          </p>

          <p>Example usage:</p>

          <p>
            <snippet>python neurostack.py --server_address 
              localhost:8001 --address localhost:8002 --use_fake_data</snippet>
          </p>

        </div>

        <div className="ns-docs-tutorial">
          <h2>Tutorial</h2>
          <p>Neurostack allows you to send a job to the backend and recieve a reply in the form of a callback function.</p>
          
          <p>First, let's connect to the backend.</p>

          <SyntaxHighlighter className="code" language="python" style={monokaiSublime}>
            {"from socketIO_client import SocketIO\n" +
              "import time\n" +
              "import json\n\n" +

              "def callback_function(*args):\n" +
              "   print(args)\n\n" +

              "# p300 server running on localhost:8002\n" + 
              "client = SocketIO('localhost', 8002)\n" +
              "client.connect()\n\n" +

              "# initialize handlers\n" +
              "client.on('uuid', print_results)\n" +
              "client.on('train', print_results)\n" +
              "client.on('predict', print_results)\n"}
          </SyntaxHighlighter>

          <p>
            We establish a connection to the server by calling <snippet>client = SocketIO('localhost', 8002)</snippet>
            , replacing '8002' with whichever port the client was initialized with.
            Calling <snippet>client.connect()</snippet> will establish a WebSocket connection to the server.
            We are also creating 3 Socket.io event handlers to handle responses from the server.
            More on <snippet>client.on(...)</snippet> here.
          </p>

          <p>Next, we need to generate a UUID. UUIDs are used by Neurostack as a unique identifier for this client.</p>

          <SyntaxHighlighter className="code" language="python" style={monokaiSublime}>
            {"# Generate a UUID\n" +
              "client.emit('generate_uuid', None)\n" +
              "client.wait(seconds=1)\n"}
          </SyntaxHighlighter>

          <p>
            Here, we are sending our Socket.io server an event called <snippet>generate_uuid</snippet>, 
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

              'client.emit("predict", args)\n' +
              "client.wait(seconds=2)"}
          </SyntaxHighlighter>

          <p>
            Here, we are sending a "predict" event to the server along with <snippet>args</snippet>
            as data. Soon, the server will reply with it's own "predict" event, which will be picked up
            by the client event handler we previously defined. Again, the <snippet>print_results</snippet>
            callback will be called, with the following arguments: your UUID, a bool <snippet>p300</snippet> 
            which is true if there is a prediced P300 ERP, and a float <snippet>score</snippet>, which is a 
            number between 0 and 1 denoting the confidence in our prediction.
          </p>

          <p>Finally, we can also send a training job to the server</p>

          <SyntaxHighlighter className="code" language="python" style={monokaiSublime}>
            {"p300 = True               # For training: True is P300, False is no P300\n\n" +

              "# Send a training job with the data at timestamp\n" +
              "args = json.dumps({\n" +
                  "'uuid': uuid,\n" +
                  "'timestamp': timestamp,\n" +
                  "'p300': p300\n" +
              "})\n\n" +

              'client.emit("train", args)\n' +
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

          <div className="ns-docs-predict">
          <Segment data = {PREDICT}/>

          </div>

          <div className="ns-docs-train">
            <Segment data = {TRAIN}/>
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

const PREDICT = {
  title: 'predict',
  description: "Make a prediction the data at a timestamp.",
  example: "args = json.dumps({\n" +
            "'uuid': uuid,\n" +
            "'timestamp': timestamp\n" +
            "})\n\n" +

            'client.emit("predict", args)',
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

const TRAIN = {
  title: "train",
  description: "Give a training example to the classifier.",
  example: "args = json.dumps({\n" +
            "'uuid': uuid,\n" +
            "'timestamp': timestamp,\n" +
            "'p300': p300\n" +
          "})\n\n" +

          'client.emit("train", args)',
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


