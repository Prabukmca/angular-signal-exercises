import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-chat-box',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatBoxComponent {
userInput: string = '';
  messages: { sender: string, text: string }[] = [];

  constructor(private http: HttpClient) {}

  sendMessage() {
    if (!this.userInput.trim()) return;

    // Push user message
    this.messages.push({ sender: 'user', text: this.userInput });

    const inputText = this.userInput;
    this.userInput = '';

    // Call API
    this.http.post<any>('http://127.0.0.1:5000/chat', { prompt: inputText })
      .subscribe(response => {
        this.messages.push({ sender: 'bot', text: response.reply });
      });
  }
}
