"use client";

import {
  ProForm,
  ProFormCascader,
  ProFormDateRangePicker,
  ProFormDigit,
  ProFormMoney,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-components";
import { Row, type SelectProps } from "antd";
import { useEffect } from "react";

enum DeliveryModeEnum {
  EXW = "EXW",
  FOB = "FOB",
  CFR = "CFR",
  CIF = "CIF",
  CIP = "CIP",
}

const deliveryModeOptions: SelectProps["options"] = [
  { label: DeliveryModeEnum.EXW, value: "EXW" },
  { label: DeliveryModeEnum.FOB, value: "FOB" },
  { label: DeliveryModeEnum.CFR, value: "CFR" },
  { label: DeliveryModeEnum.CIF, value: "CIF" },
  { label: DeliveryModeEnum.CIP, value: "CIP" },
];

const deliveryModeDesc: Record<DeliveryModeEnum, string> = {
  [DeliveryModeEnum.EXW]:
    "出厂价，客户找货代（客户找物流，客户承担运费），客户的货代会安排来工厂提货，要让货代提前告诉提货时间和提货司机的电话，然后告诉经理，最好再跟经理说一声什么产品及重量",
  [DeliveryModeEnum.FOB]:
    "货值+陆运（一般指工厂到天津港的费用）+港杂（王鹏告诉的）+报关费（100元）",
  [DeliveryModeEnum.CFR]: "货值+陆运（国内）+港杂+海/空运费（问王鹏）",
  [DeliveryModeEnum.CIF]:
    "货值+陆运（国内）+港杂+海/空运费（问王鹏）+保险（一般收保单上保险金额的千分之一）",
  [DeliveryModeEnum.CIP]:
    "货值+陆运（国内）+港杂+海/空运费（问王鹏）+保险（一般收保单上保险金额的千分之一）",
};

const { Group } = ProForm;

const ExportQuotation = (props) => {
  const [form] = ProForm.useForm();
  const deliveryMode: DeliveryModeEnum = ProForm.useWatch(
    ["deliveryMode"],
    form,
  );

  useEffect(() => {
    console.log(deliveryMode);
  }, [deliveryMode]);

  return (
    <div>
      <ProForm<{
        name: string;
        company?: string;
        useMode?: string;
      }>
        onFinish={async (values) => {
          // await waitTime(2000);
          // console.log(values);
          // const val1 = await formRef.current?.validateFields();
          // console.log('validateFields:', val1);
          // const val2 = await formRef.current?.validateFieldsReturnFormatValue?.();
          // console.log('validateFieldsReturnFormatValue:', val2);
          // message.success('Submission successful');
        }}
        // colProps={{}}
        form={form}
        rowProps={{
          gutter: [16, 0],
        }}
        colProps={{ span: 6 }}
        autoFocusFirstInput
        grid
      >
        <ProFormSelect
          name="deliveryMode"
          label="交货方式"
          options={deliveryModeOptions}
          colProps={{ span: 12 }}
          fieldProps={{ allowClear: false }}
          initialValue={DeliveryModeEnum.FOB}
          extra={deliveryModeDesc[deliveryMode]}
          allowClear={false}
        />
        <ProFormDigit
          name="cargoWeight"
          label="货物重量"
          fieldProps={{ addonAfter: "kg" }}
          colProps={{ span: 12 }}
          initialValue={0}
          min={0}
        />
        {[
          { name: "cargoUnitPrice", label: "货物单价" },
          { name: "domesticFreight", label: "国内运费单价" },
          { name: "internationalFreight", label: "国际运费单价" },
        ].map(({ name, label }) => (
          <ProFormDigit
            key={name}
            name={name}
            label={label}
            fieldProps={{ addonAfter: "元/kg" }}
            initialValue={0}
            min={0}
          />
        ))}
        <Group
          title={<div style={{ color: "red" }}>其他费用</div>}
          colProps={{ span: 24 }}
        >
          <ProFormDigit
            name="portIncidentalExpenses"
            label="港杂"
            initialValue={0}
            min={0}
          />
          <ProFormDigit
            name="customsDeclarationFee"
            label="报关费"
            initialValue={0}
            min={0}
          />
          <ProFormDigit
            name="insurance"
            label="保险"
            initialValue={0}
            min={0}
          />
        </Group>
      </ProForm>
    </div>
  );
};

export default ExportQuotation;
