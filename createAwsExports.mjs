import fs from "fs";

// Path relative to execution path
const configFilePath = "app/aws-exports.js";
const logPrefix = "[CreateAwsExports]";

function readConfigFile() {
  try {
    return fs.readFileSync(configFilePath);
  } catch (err) {
    console.error(
      logPrefix,
      `PROBABLY NO CONFIG FILE HAS BEEN FOUND! Error occured while reading the config file ${configFilePath}!`,
    );
  }
}

const currentConfigFile = readConfigFile();

if (currentConfigFile) {
  console.log(logPrefix, `File ${configFilePath} found. Stopping script!`);
  process.exit(0);
}
console.log(
  logPrefix,
  `No file found at ${configFilePath}. Getting env with aws-export...`,
);

const base64AwsExportsEnv = process.env.BASE64_AWS_EXPORTS;

if (!base64AwsExportsEnv) {
  console.log(
    logPrefix,
    `No env variable called AWS_EXPORTS has been found. Stopping script!`,
  );
  process.exit(1);
}
console.log(logPrefix, `Env variable found. Creating config file...`);

const awsExportsBuff = Buffer.from(base64AwsExportsEnv, "base64");
const awsExports = awsExportsBuff.toString("utf-8");

function createConfigFile() {
  try {
    fs.writeFileSync(configFilePath, awsExports);

    return true;
  } catch (err) {
    console.error(
      logPrefix,
      `Error occured while writing the config file ${configFilePath}!`,
      err,
    );
  }
}

const createdConfigFile = createConfigFile();

if (!createdConfigFile) {
  console.log(logPrefix, `No config file has been created. Stopping script!`);
  process.exit(1);
}

console.log(
  logPrefix,
  `File ${configFilePath} has been created successfuly! Happy deploying!`,
);