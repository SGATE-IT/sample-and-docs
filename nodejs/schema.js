module.exports = {
  description: "添加订单",
  type: "object",
  required: ["name", "amount", "currency"],
  properties: {
    name: {
      description: "备注信息",
      type: "string",
      minLength: 1,
      maxLength: 120
    },
    gate: {
      description: "支付网关选择",
      type: "string",
      enum: ["mastercard"]
    },
    currency: {
      description: "订单金额币种",
      type: "string",
      enum: ["SAR"]
    },
    amount: {
      description: "订单金额，为避免浮点数运算问题，统一放大100倍, 取整",
      type: "integer"
    }
  }
};
