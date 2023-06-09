// @generated by protoc-gen-es v0.2.1 with parameter "target=ts"
// @generated from file tendermint/rpc/grpc/types.proto (package tendermint.rpc.grpc, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";
import {ExecTxResult, ResponseCheckTx} from "../../abci/types_pb.js";

/**
 * @generated from message tendermint.rpc.grpc.RequestPing
 */
export class RequestPing extends Message<RequestPing> {
  constructor(data?: PartialMessage<RequestPing>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tendermint.rpc.grpc.RequestPing";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestPing {
    return new RequestPing().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestPing {
    return new RequestPing().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestPing {
    return new RequestPing().fromJsonString(jsonString, options);
  }

  static equals(a: RequestPing | PlainMessage<RequestPing> | undefined, b: RequestPing | PlainMessage<RequestPing> | undefined): boolean {
    return proto3.util.equals(RequestPing, a, b);
  }
}

/**
 * @generated from message tendermint.rpc.grpc.RequestBroadcastTx
 */
export class RequestBroadcastTx extends Message<RequestBroadcastTx> {
  /**
   * @generated from field: bytes tx = 1;
   */
  tx = new Uint8Array(0);

  constructor(data?: PartialMessage<RequestBroadcastTx>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tendermint.rpc.grpc.RequestBroadcastTx";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tx", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestBroadcastTx {
    return new RequestBroadcastTx().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestBroadcastTx {
    return new RequestBroadcastTx().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestBroadcastTx {
    return new RequestBroadcastTx().fromJsonString(jsonString, options);
  }

  static equals(a: RequestBroadcastTx | PlainMessage<RequestBroadcastTx> | undefined, b: RequestBroadcastTx | PlainMessage<RequestBroadcastTx> | undefined): boolean {
    return proto3.util.equals(RequestBroadcastTx, a, b);
  }
}

/**
 * @generated from message tendermint.rpc.grpc.ResponsePing
 */
export class ResponsePing extends Message<ResponsePing> {
  constructor(data?: PartialMessage<ResponsePing>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tendermint.rpc.grpc.ResponsePing";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponsePing {
    return new ResponsePing().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponsePing {
    return new ResponsePing().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponsePing {
    return new ResponsePing().fromJsonString(jsonString, options);
  }

  static equals(a: ResponsePing | PlainMessage<ResponsePing> | undefined, b: ResponsePing | PlainMessage<ResponsePing> | undefined): boolean {
    return proto3.util.equals(ResponsePing, a, b);
  }
}

/**
 * @generated from message tendermint.rpc.grpc.ResponseBroadcastTx
 */
export class ResponseBroadcastTx extends Message<ResponseBroadcastTx> {
  /**
   * @generated from field: tendermint.abci.ResponseCheckTx check_tx = 1;
   */
  checkTx?: ResponseCheckTx;

  /**
   * @generated from field: tendermint.abci.ExecTxResult tx_result = 2;
   */
  txResult?: ExecTxResult;

  constructor(data?: PartialMessage<ResponseBroadcastTx>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tendermint.rpc.grpc.ResponseBroadcastTx";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "check_tx", kind: "message", T: ResponseCheckTx },
    { no: 2, name: "tx_result", kind: "message", T: ExecTxResult },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseBroadcastTx {
    return new ResponseBroadcastTx().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseBroadcastTx {
    return new ResponseBroadcastTx().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseBroadcastTx {
    return new ResponseBroadcastTx().fromJsonString(jsonString, options);
  }

  static equals(a: ResponseBroadcastTx | PlainMessage<ResponseBroadcastTx> | undefined, b: ResponseBroadcastTx | PlainMessage<ResponseBroadcastTx> | undefined): boolean {
    return proto3.util.equals(ResponseBroadcastTx, a, b);
  }
}
