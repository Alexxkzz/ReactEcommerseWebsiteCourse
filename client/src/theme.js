
const lightBlue= {
    100: "#fbfcfe",
    200: "#f6f9fd",
    300: "#f2f7fc",
    400: "#edf4fb",
    500: "#e9f1fa",
    600: "#bac1c8",
    700: "#8c9196",
    800: "#5d6064",
    900: "#2f3032",
}
const blue= {
    100: "#cceefa",
    200: "#99ddf4",
    300: "#66cdef",
    400: "#33bce9",
    500: "#00abe4",
    600: "#0089b6",
    700: "#006789",
    800: "#00445b",
    900: "#00222e"
}

const white= {
    100: "#ffffff",
    200: "#ffffff",
    300: "#ffffff",
    400: "#ffffff",
    500: "#ffffff",
    600: "#cccccc",
    700: "#999999",
    800: "#666666",
    900: "#333333"
}

  export const themeSettings = (mode) => {
    console.log("ThemeSettings function called")
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ?
          {
            
            primary: {
              main:"rgb(102, 178, 255)",
            },
            secondary: {
              main:"rgb(19, 47, 76)",       
            },
            background:{
              main:"#0a1929"
            }
          }
          
          
          : {
      
            primary: {
              main: blue[500],
            },
            secondary: {
              main: lightBlue[400],       
            },
            background:{
              main:white[500]
            }
          }),
      },
  
    };
  };


//   blue: {
//       100: "#dce9f6",
//       200: "#b9d3ed",
//       300: "#96bce5",
//       400: "#73a6dc",
//       500: "#5090d3",
//       600: "#4073a9",
//       700: "#30567f",
//       800: "#203a54",
//       900: "#101d2a"
// },