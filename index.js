import { franc } from "franc";
import langs from "langs";
import colors from "colors";

const input = process.argv[2];
const langCode = franc(input);

if (langCode === "und") {
  console.log("Sorry couldn't figure out this Language.... :(".red);
} else {
  const language = langs.where("3", langCode);
  if (language) {
    console.log(colors.green(`Our best guess is: ${language.name}`));
  } else {
    console.log(
      colors.rainbow(`SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${langCode}`),
    );
  }
}
