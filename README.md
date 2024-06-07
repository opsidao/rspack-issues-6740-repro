# Crash on HMR

This is a simple project to show a crash on HMR.

## Steps to reproduce

- Clone this repository
- Run `npm install`
- Run `npm run dev`
- Open `http://localhost:7001` in your browser
- Modify `src/App.tsx` and save the file
- Server will crash with the following error:

```
Panic occurred at runtime. Please file an issue on GitHub with the backtrace below: https://github.com/web-infra-dev/rspack/issues
Message:  should have module graph module
Location: crates/rspack_core/src/module_graph/mod.rs:563

Run with COLORBT_SHOW_HIDDEN=1 environment variable to disable frame filtering.
Run with RUST_BACKTRACE=full to include source snippets.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ BACKTRACE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 1: _napi_register_module_v1
    at <unknown source file>
 2: _napi_register_module_v1
    at <unknown source file>
 3: _napi_register_module_v1
    at <unknown source file>
 4: _napi_register_module_v1
    at <unknown source file>
 5: _napi_register_module_v1
    at <unknown source file>
 6: _wasmer_vm_imported_memory32_atomic_notify
    at <unknown source file>
 7: _wasmer_vm_imported_memory32_atomic_notify
    at <unknown source file>
 8: _napi_register_module_v1
    at <unknown source file>
 9: _napi_register_module_v1
    at <unknown source file>
10: _napi_register_module_v1
    at <unknown source file>
11: _napi_register_module_v1
    at <unknown source file>
12: _napi_register_module_v1
    at <unknown source file>
13: _napi_register_module_v1
    at <unknown source file>
14: _napi_register_module_v1
    at <unknown source file>
15: _napi_register_module_v1
    at <unknown source file>
16: _napi_register_module_v1
    at <unknown source file>
17: _napi_register_module_v1
    at <unknown source file>
18: _napi_register_module_v1
    at <unknown source file>
19: _napi_register_module_v1
    at <unknown source file>
20: _napi_register_module_v1
    at <unknown source file>
21: __pthread_joiner_wake
    at <unknown source file>
[1]    21343 abort      npm run dev
```
