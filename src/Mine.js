import { Component } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import Stats from'./Stats';

class Mine extends Component{



    render(){
        return(
            <div>
                <table id="workshop-table">
                    <tbody>
                        <tr>
                            <td><button className="mine-iron-btn" onClick={() => mineIron(
                                                                            console.log("mining")
                            )}> Mine </button>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="button" id="forge-ingot-btn" value="Forge Ingot"/></td>
                        </tr>
                        <tr>
                            <td><input type="button" id="craft-sword-btn" value="Craft Iron Sword"/></td>
                        </tr>
                        <tr>
                            <td><input type="button" id="smelt-rod-btn" value="Smelt Iron Rod"/></td>
                        </tr>
                        <tr>
                            <td><input type="button" id="craft-gear-btn" value="Craft Iron Gear"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )}
}


export default Mine;