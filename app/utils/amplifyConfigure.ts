"use client"; // this is required

import { Amplify, Auth, API } from "aws-amplify";
import awsExports from "../aws-exports";

Amplify.configure({ config: { awsExports } });
Auth.configure({ ...awsExports, ssr: true });
API.configure({ ...awsExports });