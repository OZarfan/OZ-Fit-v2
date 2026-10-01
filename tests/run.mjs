import {fileURLToPath} from 'node:url';import path from 'node:path';import{spawnSync}from'node:child_process';
const {build}=await import(process.env.OZ_ESBUILD||'esbuild');process.chdir(path.dirname(fileURLToPath(import.meta.url))+'/..');
await build({absWorkingDir:process.cwd(),entryPoints:['tests/acceptance.ts'],outfile:'tests/acceptance.cjs',bundle:true,platform:'node',format:'cjs',logLevel:'warning'});
const r=spawnSync(process.execPath,['tests/acceptance.cjs'],{stdio:'inherit'});process.exitCode=r.status;
