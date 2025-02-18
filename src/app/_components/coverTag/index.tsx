import React from "react";
import styles from "./index.module.css";
import WechatQRCode from "./imgs/wechat-qr-code.jpg";
import WhatsAppQRCode from "./imgs/whatsApp-qr-code.jpg";
/**
 *
 * -----------------------------------
 * | [姓名] 张三 | ZHANG San          |
 * -----------------------------------
 * | [微信二维码]                [WhatsApp二维码] |
 * -----------------------------------
 * | 手机号：123-456-7890            |
 * | 电话：010-1234-5678             |
 * | 网址：www.张三.com | www.zhangsan.com |
 * | 邮箱：zhangsan@zhangsan.com     |
 * -----------------------------------
 */
// 10cm * 7cm

const infoData = [
  { label: "手机 | Phone", value: "15227851588" },
  {
    label: "邮箱 | Email",
    value: "Beata@dikuang.com",
  },
  {
    label: "电话 | Tel",
    value: "+86-311-82570688",
  },
  {
    label: "网址 | Website",
    value: "http://188988.cc | http://dikuang.com",
  },
];
const CoverTag = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoRow}>
        <span>姓名 | name: </span>
        <span>马乾亨 | Luke Ma</span>
      </div>
      {infoData.map(({ label, value }, index) => (
        <div className={styles.infoRow} key={index}>
          <span>{label}: </span>
          <span>{value}</span>
        </div>
      ))}
      <div className={styles.qrCodeRow}>
        <div className={styles.qrImgContainer}>
          <img src={WechatQRCode.src} />
          <div>微信二维码 | Wechat QR code</div>
        </div>
        <div className={styles.qrImgContainer}>
          <img src={WhatsAppQRCode.src} />
          <div>WhatsApp二维码 | WhatsApp QR code</div>
        </div>
      </div>
    </div>
  );
};

export default CoverTag;
