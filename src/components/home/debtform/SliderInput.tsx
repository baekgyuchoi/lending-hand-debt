'use client'
import { useState } from 'react';
import { Input, NumberInput, Slider } from '@mantine/core';
import classes from './SliderInput.module.css';

export interface SliderInputProps {
  // Define your props here
  creditCardDebt: number|string;
  setCreditCardDebt: (value: number|string) => void;
}

export function SliderInput(props: SliderInputProps) {
  const value = props.creditCardDebt;
  const setValue = props.setCreditCardDebt;

  const getValue = (value: number | string) => {
    if (typeof value === 'string') {
        return 'Use slider below to set debt amount';
    }
    if (value < 10000) {
        return '< $10000'
    }
    if (value > 100000) {
        return '> $100000'
    }
    return "$" + value.toString();
  }

  return (
    <div className={classes.wrapper + " h-28 lg:h-40"}>
      <input
        value={getValue(value)}
        onChange={() => {setValue(value)}}
        disabled
        placeholder='Enter Debt Amount'
        step={50}
        min={0}
        max={8000}
        id='debtAmount'
        className={" bg-white w-full h-10 px-4 py-10 text-2xl lg:text-4xl  rounded-md text-gray-800"}
      />
      <Slider
        max={110000}
        step={100}
        size={6}
        min={5000}
        label={null}
        value={typeof value === 'string' ? 0 : value}
        onChange={setValue}
        color="dark"
        className={classes.slider + " mt-2"}
        classNames={classes}
      />
    </div>
  );
}