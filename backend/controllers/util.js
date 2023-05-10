const { Document, Packer, Paragraph, TextRun } = require("docx");
const fs = require("fs");

exports.gerarDOC = (req, res, next) => {
  const dataList = req.body.list;
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun("Hello World"),
              new TextRun({
                text: "Foo Bar",
                bold: true,
              }),
              new TextRun({
                text: "\tGithub is the best",
                bold: true,
              }),
            ],
          }),
        ],
      },
    ],
  });

  Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("index.txt", buffer);
  });
};
