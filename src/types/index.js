// @flow

// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/**
 * All timestamps are in microseconds
 */

type KeyValuePair = {
  key: string,
  type: string,
  value: string,
};

export type Tag = KeyValuePair;

export type Log = {
  timestamp: number,
  fields: Array<KeyValuePair>,
};

export type Process = {
  serviceName: string,
  tags: Array<Tag>,
};

export type SpanReference = {
  refType: 'CHILD_OF' | 'FOLLOWS_FROM',
  spanID: string,
  traceID: string,
};

export type Span = {
  spanID: string,
  traceID: string,
  processID: string,
  operationName: string,
  startTime: number,
  duration: number,
  logs: Array<Log>,
  tags: Array<Tag>,
  references: Array<SpanReference>,
};

export type Trace = {
  traceID: string,
  spans: Array<Span>,
  processes: {
    [string]: Process,
  },
};
