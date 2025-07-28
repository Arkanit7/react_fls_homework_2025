#!/bin/bash

# Usage
# bash crate-component.sh [COMPONENT_NAME]

COMPONENT_NAME=$1
COMPONENT_DIR="src/components/$COMPONENT_NAME"

mkdir -p "$COMPONENT_DIR"

# Create SCSS module if it doesn't exist
if [ ! -f "$COMPONENT_DIR/$COMPONENT_NAME.module.scss" ]; then
  cat > "$COMPONENT_DIR/$COMPONENT_NAME.module.scss" <<EOF
@use "~/abstracts" as *;
EOF
else
  echo "⚠️ $COMPONENT_NAME.module.scss already exists, skipping."
fi

# Create JSX file if it doesn't exist
if [ ! -f "$COMPONENT_DIR/$COMPONENT_NAME.jsx" ]; then
  cat > "$COMPONENT_DIR/$COMPONENT_NAME.jsx" <<EOF
import clsx from 'clsx/lite'
import styles from './$COMPONENT_NAME.module.scss'

function $COMPONENT_NAME({className = '', ...restProps}) {
  return <div className={clsx(styles.$COMPONENT_NAME, className)} {...restProps} />
}

export default $COMPONENT_NAME
EOF
else
  echo "⚠️ $COMPONENT_NAME.jsx already exists, skipping."
fi

# Create index.js if it doesn't exist
if [ ! -f "$COMPONENT_DIR/index.js" ]; then
  cat > "$COMPONENT_DIR/index.js" <<EOF
export { default } from './$COMPONENT_NAME'
EOF
else
  echo "⚠️ index.js already exists, skipping."
fi

echo "✅ Component \"$COMPONENT_NAME\" created in $COMPONENT_DIR"