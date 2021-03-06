﻿module CIL.Runtime.OpCodes
{
    "use strict";

    export class AddOvf extends OpCode
    {
        number(): number
        {
            return 214;
        }

        execute(bytes: number[]): void
        {
            var value2: StackFrameValue = this.stack[0].evaluationStack.pop();
            var value1: StackFrameValue = this.stack[0].evaluationStack.pop();

            if (value1.type === StackFrameValueType.SignedInt && value2.type === StackFrameValueType.SignedInt)
            {
                try
                {
                this.stack[0].evaluationStack.push(new StackFrameValue(StackFrameValueType.SignedInt, value1.signedInt.add(value2.signedInt, true)));
                }
                catch (ex)
                {
                    if (ex.message === "OVERFLOW")
                    {
                        // TODO: Throw System.OverflowException
                        throw ex;
                    }
                }
            }
            else if (value1.type === StackFrameValueType.UnsignedInt && value2.type === StackFrameValueType.UnsignedInt)
            {
                try
                {
                this.stack[0].evaluationStack.push(new StackFrameValue(StackFrameValueType.UnsignedInt, value1.unsignedInt.add(value2.unsignedInt, true)));
                }
                catch (ex)
                {
                    if (ex.message === "OVERFLOW")
                    {
                        // TODO: Throw System.OverflowException
                        throw ex;
                    }
                }
            }
            else if (value1.type === StackFrameValueType.Float && value2.type === StackFrameValueType.Float)
            {
                this.stack[0].evaluationStack.push(new StackFrameValue(StackFrameValueType.Float, value1.float + value2.float));
            }
            else
            {
                throw new TypeError("add.ovf (0xD6) or add.ovf.un (0xD7) called on operands of type " + StackFrameValueType[value1.type] + " and " + StackFrameValueType[value2.type] + ".");
            }
        }

        constructor(memory: MemorySystem.IMemoryManger, stack: StackFrame[])
        {
            super(memory, stack);
        }

        static Instance: AddOvf;
    }

    OpCode.opCodes[AddOvf.prototype.number()] = (memory: MemorySystem.IMemoryManger, stack: StackFrame[]): AddOvf =>
    {
        AddOvf.Instance = AddOvf.Instance || new AddOvf(memory, stack);
        return AddOvf.Instance;
    };
} 