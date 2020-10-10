const Service = require("egg").Service;
const fs = require("fs");
const path = require("path");

class UploadService extends Service {
  /**
   * file 要保存的文件
   * name 文件名  时间戳+随机数4位+文件后缀名
   */
  async saveFile(file) {
    console.log("savefile", file);
    const timestamp = Math.round(new Date().getTime() / 1000).toString();
    const filename = timestamp + Math.random().toString(36).substring(2) + path.basename(file.filename); //保存到本地的文件名
    // 上传图片的目录
    let target = "app/public/image" + filename;
    let writeStream = fs.createWriteStream(target);
    // await pump(stream, writeStream);

    return true;
  }
}

module.exports = UploadService;
