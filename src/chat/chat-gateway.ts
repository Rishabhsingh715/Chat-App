import { MessageBody, 
    OnGatewayConnection, 
    OnGatewayDisconnect, 
    OnGatewayInit, 
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer } from "@nestjs/websockets";

@WebSocketGateway(3235, {cors: true})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect	 {
    handleDisconnect(client: any) {
       console.log('Client disconnected.........');
        
    }
   
    handleConnection(client: any, ...args: any[]) {
       console.log('Client connected.........');
       
    }
  
    afterInit(server: any) {
      console.log('gateway initialized');
    }

  @WebSocketServer()
  server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    this.server.emit('message', message);
  }
  @SubscribeMessage('user2message')
  handle2Message(@MessageBody() message: string): void {
    this.server.emit('user2message', message);
  }
}