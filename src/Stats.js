import { Component } from "react";

class Stats extends Component{
    constructor(props) {
        super(props);
        this.state = {
            stats: {
                currency: 0,
                ore: 0,
                ingot: 0,
                sword: 0,
                ironRod: 0,
                ironGear: 0,
                orePerSwing: 1,
                automining: false,
                hasPurchasedMining: false,
                autosmelting: false,
                hasPurchasedSmelting: false,
                mineCount: 0,
                isCopperUnlocked: false,
                isTitaniumUnlocked: false,
            },
            materialsNeeded: {
                ingot: 10,
                sword: 3,
                ironGear: 3,
                craftIronGear: 2, //ingots required
                ironRod: 3,
                craftIronRod: 7, //ore required
            },
            materialsValue: {
                oreValue: .5,
                ingotValue: 7,
                swordValue: 35,
            },
            shopPrices: {
                autominingPrice: 500,
                autoSmeltingPrice: 1000,
            },
            gameUnlocks: {
                copperOreUnlock: 5000,
                titaniumOreUnlock: 35000,
            }
        };
    }

    render(){
        return(
            <div class="row mx-auto">
                <div class="card">
                    <div class="stats-readout mx-auto">
                        <p class="iron-count-text">Iron Ore: <span id="iron-count">{this.state.stats.ore}</span></p>
                        <p class="iron-count-text">Iron Ingots: <span id="iron-ingot-count">{this.state.stats.ingot}</span></p>
                        <p class="iron-count-text">Iron Swords: <span id="iron-sword-count">{this.state.stats.sword}</span></p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Stats;