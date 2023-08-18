import { createSlice, current } from "@reduxjs/toolkit";
import jew1 from "../../assets/images/earring1.png";
import jew2 from "../../assets/images/earring2.png";
import jew3 from "../../assets/images/earring3.png";
import jew4 from "../../assets/images/earring4.png";
import jew5 from "../../assets/images/earring5.png";
import jew6 from "../../assets/images/earring6.png";
import jew7 from "../../assets/images/earring7.png";
import jew8 from "../../assets/images/earring8.png";

const initialState = {
  jewelry: [
    {
      id: 1,
      name: "DIAMOND STUDS",
      popularity: 8,
      type: "stud",
      gemstone: true,
      price: 200.0,
      image: jew1,
    },
    {
      id: 2,
      name: "MINI HOOPS",
      popularity: 6,
      type: "huggie",
      gemstone: false,
      price: 90.0,
      image: jew2,
    },
    {
      id: 3,
      name: "DANGLING LEAVES",
      popularity: 2,
      type: "drop",
      gemstone: false,
      price: 60.0,
      image: jew3,
    },
    {
      id: 4,
      name: "LEAF STUDS",
      popularity: 1,
      type: "stud",
      gemstone: false,
      price: 40.0,
      image: jew4,
    },
    {
      id: 5,
      name: "CHAIN DROPS",
      popularity: 3,
      type: "drop",
      gemstone: false,
      price: 40.0,
      image: jew5,
    },
    {
      id: 6,
      name: "STAR BUNDLE STUDS",
      popularity: 5,
      type: "stud",
      gemstone: false,
      price: 100.0,
      image: jew6,
    },
    {
      id: 7,
      name: "SPHERICAL DROPS",
      popularity: 4,
      type: "drop",
      gemstone: false,
      price: 150.0,
      image: jew7,
    },
    {
      id: 8,
      name: "CHAINED STUDS",
      popularity: 7,
      type: "stud",
      gemstone: false,
      price: 100.0,
      image: jew8,
    },
  ],
};

const jewelrySlice = createSlice({
  name: "jewelry",
  initialState,
  reducers: {
    sortBy: (state, { payload }) => {
      const stateCopy = JSON.parse(JSON.stringify(current(state.jewelry)));

      stateCopy.sort((a, b) => {
        if (a[payload.toLowerCase()] > b[payload.toLowerCase()]) {
          return -1;
        } else if (a[payload.toLowerCase()] < b[payload.toLowerCase()]) {
          return 1;
        } else {
          return 0;
        }
      });
      state.jewelry = stateCopy;
    },
  },
});

export default jewelrySlice.reducer;
export const { sortBy } = jewelrySlice.actions;
