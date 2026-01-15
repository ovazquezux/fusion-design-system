import React from 'react';
import {
  Card as MuiCard,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  CardProps as MuiCardProps,
} from '@mui/material';
import { Button } from '../Button';

export interface CardProps extends Omit<MuiCardProps, 'title'> {
  /** Card title */
  title: string;
  /** Card description */
  description?: string;
  /** Image URL */
  image?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Primary action label */
  primaryAction?: string;
  /** Secondary action label */
  secondaryAction?: string;
  /** Primary action handler */
  onPrimaryAction?: () => void;
  /** Secondary action handler */
  onSecondaryAction?: () => void;
}

/**
 * Card component for displaying content in a contained format
 */
export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  imageAlt = 'Card image',
  primaryAction,
  secondaryAction,
  onPrimaryAction,
  onSecondaryAction,
  ...props
}) => {
  return (
    <MuiCard sx={{ maxWidth: 345 }} {...props}>
      {image && (
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={imageAlt}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </CardContent>
      {(primaryAction || secondaryAction) && (
        <CardActions>
          {secondaryAction && (
            <Button
              variant="text"
              size="small"
              label={secondaryAction}
              onClick={onSecondaryAction}
            />
          )}
          {primaryAction && (
            <Button
              variant="primary"
              size="small"
              label={primaryAction}
              onClick={onPrimaryAction}
            />
          )}
        </CardActions>
      )}
    </MuiCard>
  );
};

export default Card;
