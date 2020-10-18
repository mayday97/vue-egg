const Service = require("egg").Service;
const fs = require("fs");
const path = require("path");
const pump = require("mz-modules/pump");

class UploadService extends Service {
  /**
   * file 要保存的文件
   * name 文件名  时间戳+随机数4位+文件后缀名
   */
  async saveFile(file) {
    // console.log("savefile", file);
    const filedata = fs.readFileSync(file.filepath); //读取文件
    const base64str = Buffer.from(filedata, "binary").toString("base64"); //转base64
    const bufferData = Buffer.from(base64str, "base64");
    const uplaodBasePath = "../../public/upload/";

    const timestamp = Math.round(new Date().getTime() / 1000).toString();
    const filename = timestamp + Math.random().toString(36).substring(2) + ".jpeg"; //path.basename(file.filename)保存到本地的文件名

    const dirName = new Date().toLocaleDateString().toString(); //以当前日期文件夹名称
    const dir = path.join(__dirname, uplaodBasePath, dirName);
    const src = path.join(__dirname, uplaodBasePath, dirName, filename);

    if (!fs.existsSync(dir)) fs.mkdirSync(dir); //如果没有目录 则创建
    try {
      await fs.writeFileSync(src, bufferData);
      return src; //返回图片地址
    } catch (e) {
      console.log(e);
      return -1;
    }
  }
}

module.exports = UploadService;
