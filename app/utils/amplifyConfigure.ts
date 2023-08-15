"use client"; // this is required

import { Amplify } from "aws-amplify";
import { Auth, API } from "aws-amplify";
import awsExports from "../aws-exports";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure({ config: { awsExports } });
Auth.configure({ ...awsExports, ssr: true });
API.configure({ ...awsExports });