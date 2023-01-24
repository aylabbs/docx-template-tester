import * as fs from "fs";
import { TemplateHandler } from "easy-template-x";
import { createResolver } from "easy-template-x-angular-expressions";

import data from "./data.json" assert { type: "json" };

// 1. read template file
const templateFile = fs.readFileSync("template/Template.docx");

const handler = new TemplateHandler({ scopeDataResolver: createResolver() });
const doc = await handler.process(templateFile, data);

// 3. save output
fs.writeFileSync("out.docx", doc);
