#!/usr/bin/env node

import { dicomWebServerConfig } from "../lib/index.mjs";
import "@radical/static-wado-plugins";
import configureProgram from "../lib/program/index.mjs";

// Configure program commander
configureProgram(dicomWebServerConfig).then((program) => {
  program.main();
});
