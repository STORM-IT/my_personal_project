import React from 'react'
import MultiProgress from 'react-multi-progress';

export default function ProgressSkil({level1=100,level2=100,parentClass=""}) {
    const sampleChartColors = {
        success: "#10CCAE",
        failure: "#F35242",
      };
  return (
    
    <div className={`flex justify-around items-center p-2 rounded-3xl bg-[#D9D9D9] ${parentClass}`}>
    <MultiProgress
      className="h--25  overflow-hidden mr-3"
      style={{ height: "25px",    "border-radius": "50px"}}
      round={true}
      transitionTime={1.5}
      roundLastElement={false}
      elements={[
        {
          color: "#ffff",
          value:level1-100,
        },
        {
          color: "#6B21A8",
          actual:level1,
          value:level1,
          className:''
        },

      ]}
      component={({ children, element, ...rest }) => {
        return (
          <div
            {...rest} // adds all styles for rendering the progress bar
            style={{
              fontWeight: element.isBold ? 900 : 300,
            }}
            className="progressBar__single ">
            {children}
            <div className="flex justify-center items-center">
              <span className=" text-white text-[10px]">{element?.actual}</span>
              <i
                className={` inline-block ${
                  element.color === sampleChartColors.failure
                    ? "borderBT--red triangle-down"
                    : element.color === sampleChartColors.success
                    ? "triangle-up"
                    : "dot"
                }`}></i>
            </div>
          </div>
        );
      }}
    />
    <MultiProgress
      className="h--25  overflow-hidden ml-3" 
      style={{ height: "25px",    "border-radius": "50px"}}
      round={true}
      transitionTime={1.5}
      roundLastElement={false}
      elements={[
        {
          color: "#ffff",
          value:level2-100,
        },
        {
          color: "#6B21A8",
          
          actual:level2,
          value:level2,
          className:''
        },

      ]}
      component={({ children, element, ...rest }) => {
        return (
          <div
            {...rest} // adds all styles for rendering the progress bar
            style={{
              fontWeight: element.isBold ? 900 : 300,
            }}
            className="progressBar__single ">
            {children}
            <div className="flex justify-center items-center">
              <span className=" text-white text-[10px]">{element?.actual}</span>
              <i
                className={` inline-block ${
                  element.color === sampleChartColors.failure
                    ? "borderBT--red triangle-down"
                    : element.color === sampleChartColors.success
                    ? "triangle-up"
                    : "dot"
                }`}></i>
            </div>
          </div>
        );
      }}
    />
    </div>
  )
}
