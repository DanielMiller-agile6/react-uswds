import React from 'react'
import classnames from 'classnames'

interface CardMediaProps {
  exdent?: boolean
  imageClass?: string
  children: React.ReactNode
}

export const CardMedia = (
  props: CardMediaProps & React.HTMLAttributes<HTMLDivElement>
): React.ReactElement => {
  const { exdent, imageClass, children, className, ...mediaProps } = props

  const classes = classnames(
    'usa-card__media',
    {
      'usa-card__media--exdent': exdent,
    },
    className
  )

  const imageClasses = classnames('usa-card__img', imageClass)

  return (
    <div className={classes} {...mediaProps} data-testid="CardMedia">
      <div className={imageClasses}>{children}</div>
    </div>
  )
}

export default CardMedia