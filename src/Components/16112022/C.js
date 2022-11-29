import React from 'react';
import D from './D';

class C extends React.Component {

    state = {Name:'Shiv Sai' ,Age:22}

    render(){
        return(
            <div>
                <D a={this.state} />
                 </div>
        )
    }
}
export default C;
