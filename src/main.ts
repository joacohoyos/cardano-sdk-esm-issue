import { Serialization } from "@cardano-sdk/core";

const plutusData = Serialization.PlutusData.newInteger(10n);
console.log(plutusData.toCbor());
