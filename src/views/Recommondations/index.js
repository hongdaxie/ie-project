import React, { Component } from 'react'
import tableau from "tableau-api";


export default class Recommondation extends Component {

    constructor(props) {
        super(props);
        // this.fluAmountChart = createRef()
    }

    componentDidMount(){
        this.initViz() 
    }

    

    initViz() {  
    let vizUrl = 'https://public.tableau.com/shared/W35RT4HZP?:display_count=yes&:origin=viz_share_link';  
    const options = {

        hideTabs: true,
        hideToolbar: true,
        // onFirstInterative: () => {
        //     // console.log("it worked")
        // }
      };
    const vizContainer = this.vizContainer;  
    this.viz = new window.tableau.Viz(this.vizContainer, vizUrl, options)  
    } 

    render() {
        return (
            <div 
                ref={(div) => { this.vizContainer = div }}
                // ref={this.fluAmountChart}
            >
                
            </div>
        )
    }
}
