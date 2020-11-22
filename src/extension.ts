'use strict';
import * as vscode from 'vscode';
import { ServiceProvider, ServiceType } from './Providers/ServiceProvider';

export function activate(context: vscode.ExtensionContext) {

    // Convert to UTF8
    context.subscriptions.push(
        disposableAction('extension.convertSjisToUTF8', ServiceType.SJIStoUTF8, {FinishMessage:'Saved all files as UTF8'})
    );
    // Convert to SJIS
    context.subscriptions.push(
        disposableAction('extension.convertUTF8ToSjis', ServiceType.UTF8toSJIS, {FinishMessage:'Saved all files as SJIS'})
    );
    // Convert to UTF8
    context.subscriptions.push(
        disposableAction('extension.convertBig5ToUTF8', ServiceType.Big5toUTF8, {FinishMessage:'Saved all files as UTF8'})
    );
    // Convert to Big5
    context.subscriptions.push(
        disposableAction('extension.convertBig5ToSjis', ServiceType.UTF8toBig5, {FinishMessage:'Saved all files as Big5'})
    );


    /**
     * Return register command, which has main action
     * @param command 
     * @param message 
     */
    function disposableAction(command:string, serviceType: ServiceType ,message: {StartMessage?: string, FinishMessage?: string}) {

        return vscode.commands.registerCommand(command, async () => { 
            // StartMessage
            showMessage(message.StartMessage);

            // Main Action
            const service = new ServiceProvider().provide(serviceType);
            await service.convertEncoding();

            // FinishMessage
            showMessage(message.FinishMessage);

        });
    }

    /**
     * Show InformationMessage if message exist.
     * @param message 
     */
    function showMessage(message?: string) {
        if (message) {
            vscode.window.showInformationMessage(message);
        }
    }

    
}

// this method is called when your extension is deactivated
export function deactivate() {
}


