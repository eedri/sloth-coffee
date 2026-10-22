// Renders sign.html to a PNG with WebKit (headless Chrome crashes on this Mac).
// Usage: swift sign/render.swift sign/sign.html out.png [width height]
import AppKit
import WebKit

let args = CommandLine.arguments
let input = URL(fileURLWithPath: args[1])
let output = URL(fileURLWithPath: args[2])
let width = args.count > 3 ? Double(args[3])! : 1240
let height = args.count > 4 ? Double(args[4])! : 1748

final class Renderer: NSObject, WKNavigationDelegate {
  let view = WKWebView(frame: NSRect(x: 0, y: 0, width: width, height: height))
  func start() {
    view.navigationDelegate = self
    view.loadFileURL(input, allowingReadAccessTo: input.deletingLastPathComponent().deletingLastPathComponent())
  }
  func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
    DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) {
      let config = WKSnapshotConfiguration()
      config.rect = NSRect(x: 0, y: 0, width: width, height: height)
      config.snapshotWidth = NSNumber(value: width)
      webView.takeSnapshot(with: config) { image, error in
        guard let image = image, let tiff = image.tiffRepresentation,
              let png = NSBitmapImageRep(data: tiff)?.representation(using: .png, properties: [:]) else {
          print("snapshot failed: \(String(describing: error))"); exit(1)
        }
        try! png.write(to: output)
        exit(0)
      }
    }
  }
}

let app = NSApplication.shared
let renderer = Renderer()
renderer.start()
app.run()
