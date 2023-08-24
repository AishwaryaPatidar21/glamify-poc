import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "../../redux/slices/counterSlice";
import Table from "./Table";
import { Button } from "@mui/material";
import { fetchUsers } from "../../redux/asyncThunk/user.thunk";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  
  useEffect(() => {
	dispatch(fetchUsers());
  }, []);
  return (
    <>
      <Table />
      <div>
		<Button variant="contained" onClick={() => dispatch(increment())}>
			+
		</Button>
        <span>{count}</span>
		<Button variant="outlined"  onClick={() => dispatch(decrement())}>
			-
		</Button>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </>
  );
}
