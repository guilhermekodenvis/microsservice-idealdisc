import aws from "aws-sdk";
import fs from "fs";
import handlebars from "handlebars";
import nodemailer, { Transporter } from "nodemailer";
import { injectable } from "tsyringe";

import IMailProvider from "../IMailProvider";

@injectable()
export default class SESMailProvider implements IMailProvider {
  private client: Transporter;
  constructor() {
    this.client = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      // host: "email-smtp.us-east-2.amazonaws.com",
      // port: 587,
      // secure: false,
      // auth: {
      //   user: process.env.AWS_SMTP_ACCESS_KEY_ID,
      //   pass: process.env.AWS_SMTP_SECRET_ACCESS_KEY,
      // },
      // SES: new aws.SES({
      //   apiVersion: "2010-12-01",
      //   region: process.env.AWS_SES_REGION,
      // }),
    });
  }

  public async sendMail(to: string, subject: string, variables: any, path: string, cc: string[]): Promise<void> {
    const templateFileContent = fs.readFileSync(path).toString("utf-8");

    const templateParse = handlebars.compile(templateFileContent);

    const templateHTML = templateParse(variables);

    await this.client.sendMail({
      to,
      from: "Idealdisc <contato@idealdisc.com.br>",
      subject,
      html: templateHTML,
      cc,
    });
  }
}
