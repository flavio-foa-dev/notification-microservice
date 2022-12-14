import { IsNotEmpty, Length } from 'class-validator';

export class CreateNotification {
  @IsNotEmpty()
  recipient_id: string | undefined;

  @IsNotEmpty()
  @Length(5, 100)
  content: string | undefined;

  @IsNotEmpty()
  category: string | undefined;
}
