import { IsNotEmpty, Length } from 'class-validator';

export class Notification {
  @IsNotEmpty()
  recipient_id: string;

  @IsNotEmpty()
  @Length(5, 100)
  content: string;

  @IsNotEmpty()
  category: string;
}
