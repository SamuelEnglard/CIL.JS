﻿module CIL.Runtime.OpCodes
{
    "use strict";

    export class Constrained extends OpCode
    {
        number(): number
        {
            return 65046;
        }

        argumentCount(): number[]
        {
            return [4];
        }

        execute(bytes: number[])
        {
            /*
                If thisType is a reference type (as opposed to a value type) then
                    ptr is dereferenced and passed as the ‘this’ pointer to the callvirt of method
                If thisType is a value type and thisType implements method then
                    ptr is passed unmodified as the ‘this’ pointer to a call of method implemented by thisType
                If thisType is a value type and thisType does not implement method then
                    ptr is dereferenced, boxed, and passed as the ‘this’ pointer to the callvirt of method
             */
            return;
        }

        constructor(memory: MemorySystem.IMemoryManger, stack: StackFrame[])
        {
            super(memory, stack);
        }

        static Instance: Constrained;
    }

    OpCode.opCodes[Constrained.prototype.number()] = (memory: MemorySystem.IMemoryManger, stack: StackFrame[]): Constrained =>
    {
        Constrained.Instance = Constrained.Instance = new Constrained(memory, stack);
        return Constrained.Instance;
    };
} 