import React from 'react';
import './Collapsable.scss';

class Collapsable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isExpanded: false
    }
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
      height: this.refs.inner.clientHeight
    })
  }

  render() {
    const {isExpanded, height} = this.state
    const currentHeight = isExpanded ? height + this.props.expandHeight : 0

    return(
      <div className="collapsable">

        <div className='trigger-div' onClick={(e) => this.handleToggle(e)}>
          <span className={`caret ${this.state.isExpanded ? 'rotate': ''}`}/>
          <button>
            {this.props.trigger}
          </button>
        </div>

        <div>
          {this.props.body}
        </div>

        <div className="collapsing" style={{height: currentHeight+'px'}}>
          <div ref="inner">
            {this.props.collapsing}
          </div>
        </div>

      </div>
    )
  }

}

export default Collapsable;
