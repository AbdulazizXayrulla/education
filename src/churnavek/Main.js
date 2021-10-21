import React from "react";


class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            states: []
        }
    }

    render() {
        const solution = () => {

            var text1 = document.getElementById("1").value;
            var text1a=text1;
            var text2 = document.getElementById("2").value;
            var result = ""
            for (var i = 0; i < text2.length; i++) {
                var ss = false;
                for (var j = 0; j < text1.length; j++) {
                    if (text1[j] == text2[i]) {
                        ss = true;
                        text1=text1.slice(0,j-1)+text1.slice(j+1,text1.length)
                    }
                }
                if (ss) {
                    result += text2[i];
                }
            }
            var newState = {
                oldText: text1a,
                oldText1: text2,
                resul: result
            }
            var userList = this.state.states;
            userList.push(newState)
            this.setState({
                states: userList
            })
            document.getElementById("result").innerHTML = result;
            document.getElementById("1").value=""
            document.getElementById("2").value=""

        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-4">
                        <div className="card">
                            <div className="card-body">
                                <input type="text" id="1" className="form-control"/>
                                <input type="text" id="2" className="form-control mt-3"/>
                                <button type="button" className="btn btn-success mt-3 float-right" onClick={() => {
                                    solution()
                                }}>Ok
                                </button>
                            </div>
                            <div className="card-footer">
                                <span id="result"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 offset-1">
                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>

                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                            </tr>
                            </thead>
                            <tbody>

                            {
                                this.state.states.map((value, index) => (
                                <tr>



                                    <td>{value.oldText}</td>
                                    <td>{value.oldText1}</td>
                                    <td>{value.resul}</td>
                                </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        );
    }


}


export default Main