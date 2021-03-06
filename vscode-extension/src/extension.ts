// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "new-project" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('new-project.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from New-Project!');
	});

	vscode.commands.registerCommand('new-project.newProject', () => {
		// Create and show a new webview
		const panel = vscode.window.createWebviewPanel(
		  'newProject', // Identifies the type of the webview. Used internally
		  'New Project', // Title of the panel displayed to the user
		  vscode.ViewColumn.One, // Editor column to show the new webview panel in.
		  {} // Webview options. More on these later.
		);

		panel.webview.html = getWebviewContent();
	  })

	context.subscriptions.push(disposable);
}

function getWebviewContent() {
	return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>New Project</title>
  </head>
  <body>
	<div id="main-view">
		<div "id=project-buttons">
			<button id="new-project-btn">New Project</button>
			<button id="scaffold-project-btn">Scaffold Project</button>
			<button id="quit-btn">Quit</button>
		</div>
	</div>
  </body>
  </html>`;
  }
  

// this method is called when your extension is deactivated
export function deactivate() {}
