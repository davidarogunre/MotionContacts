import {
    extendTheme
} from '@chakra-ui/react';

const activeLabelStyles = {
    transform: "scale(0.85) translateY(-26px)"
  };
  
const theme = extendTheme({
    components: {
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles
                }
              },
              "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label": {
                ...activeLabelStyles
              },
              label: {
                top: '-2px',
                left: 0,
                zIndex: 2,
                position: "absolute",
                backgroundColor: "white",
                pointerEvents: "none",
                mx: 3,
                px: 1,
                my: 2,
                transformOrigin: "left top"
              }
            }
          }
        }
      }
    }
  });
export default theme