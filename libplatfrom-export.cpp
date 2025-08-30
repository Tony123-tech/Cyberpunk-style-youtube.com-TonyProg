#include <iostream>
#include <memory>
#include <sstream>
#include <vector>
#include <algorithm>
#include <v8.h>

void logHelloFromV8(v8::Isolate* isolate, const std::string& message) {
    v8::HandleScope handle_scope(isolate);
    v8::Local<v8::Context> context = v8::Context::New(isolate);
    v8::Context::Scope context_scope(context);
    v8::Local<v8::String> source =
        v8::String::NewFromUtf8(isolate, message.c_str(), v8::NewStringType::kNormal)
            .ToLocalChecked();
    v8::Local<v8::Script> script = v8::Script::Compile(context, source).ToLocalChecked();
    script->Run(context).ToLocalChecked();
}

void logHelloFromV8(v8::Isolate* isolate, const std::vector<std::string>& messages) {
    std::for_each(messages.begin(), messages.end(), [isolate](const std::string& message) {
        logHelloFromV8(isolate, message);
    });
}

extern "C" void youtube_cpp() {
    std::cout << "Hello, YouTube from C++!" << std::endl;
    v8::Isolate* isolate = v8::Isolate::GetCurrent();
    std::vector<std::string> messages = {
        "console.log('Hello, YouTube from V8!');",
        "console.log('Hello, YouTube from V8! (1)');",
        "console.log('Hello, YouTube from V8! (2)');",
        "console.log('Hello, YouTube from V8! (3)');",
        "console.log('Hello, YouTube from V8! (4)');",
        "console.log('Hello, YouTube from V8! (5)');",
    };
    logHelloFromV8(isolate, messages);
}

extern "C" Platform* createPlatform() {
    std::unique_ptr<v8::platform::InProcessStackDumpingPlatform> platform(
        v8::platform::NewDefaultPlatform());
    v8::V8::InitializePlatform(platform.get());
    v8::V8::Initialize();
    return platform.release();
}
extern "C" void youtube_function_10000() {
    std::cout << "YouTube Function 10000 executing..." << std::endl;
    v8::Isolate::CreateParams create_params;
    create_params.array_buffer_allocator = v8::ArrayBuffer::Allocator::NewDefaultAllocator();
    v8::Isolate* isolate = v8::Isolate::New(create_params);
    {
        v8::Isolate::Scope isolate_scope(isolate);
        std::vector<std::string> batch_messages;
        batch_messages.reserve(10000);
        for (int i = 0; i < 10000; ++i) {
            std::ostringstream oss;
            oss << "console.log('YouTube batch message " << i << "');";
            batch_messages.push_back(oss.str());
        }
        logHelloFromV8(isolate, batch_messages);
        std::cout << "Batch processing of 10000 messages completed." << std::endl;
    }
    isolate->Dispose();
    delete create_params.array_buffer_allocator;
}
