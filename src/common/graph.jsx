import React from 'react';
import { Chart } from "react-charts";


const Graph = () => {
    return (      <div className="card">
    <div style={{width: "100%", height: "500px"}}>
        <Chart
            data={[
                {
                    label: "Series 1",
                    data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
                },
                {
                    label: "Series 2",
                    data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
                }
            ]}
            series={{ type: 'bar' }}
            axes={[
                { primary: true, type: "linear", position: "bottom" },
                { type: "linear", position: "left" }
            ]}
        />
    </div>
</div>
);
}
 
export default Graph;