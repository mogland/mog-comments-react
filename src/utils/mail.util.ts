/*
 * @FilePath: /nx-comments-react/src/utils/mail.util.ts
 * @author: Wibus
 * @Date: 2022-08-24 20:43:38
 * @LastEditors: Wibus
 * @LastEditTime: 2022-08-24 20:43:39
 * Coding With IU
 */
export const mailAvatar = (mail: string) => {
  // md5 加密 mail
  const md5 = require("crypto").createHash("md5").update(mail).digest("hex");
  return `https://cravatar.cn/avatar/${md5}`;
}