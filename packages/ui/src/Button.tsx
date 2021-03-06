import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { primaryColor, color, toRgb } from './theme';

const colorText = theme('mode', {
  light: color.light.lightest,
  dark: color.dark.lightest
});

const backgroundHover = theme('mode', {
  light: color.light.light,
  dark: color.dark.light
});

const backgroundActive = theme('mode', {
  light: color.light.darker,
  dark: color.dark.darker
});

const shadowSelected = theme('mode', {
  light: toRgb(color.light.dark),
  dark: toRgb(color.dark.normal)
});

export const buttonBorderRadius = '0.25rem';
export const buttonSizes = {
  sm: '0.7rem',
  md: '1rem',
  lm: '1.1rem'
};

interface ButtonProps {
  readonly active: boolean;
  readonly size: keyof typeof buttonSizes;
}

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  font-weight: 400;
  color: ${colorText} !important;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: ${props =>
    props.active ? backgroundActive : primaryColor};
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: ${({ size }) => (size ? buttonSizes[size] : buttonSizes['md'])};
  line-height: 1.5;
  border-radius: ${buttonBorderRadius};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  ${props => props.disabled && 'pointer-events: none; opacity: 0.6;'}

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(${shadowSelected}, 0.5);
  }
  &:hover {
    outline: 0;
    color: #fff;
    background-color: ${backgroundHover};
    border-color: ${backgroundHover};
    text-decoration: none;
  }
  &:not(:disabled):not(.disabled):active {
    color: #fff;
    background-color: ${backgroundActive};
    border-color: ${backgroundActive};
  }
`;

interface ButtonLinkProps {
  readonly disabled: boolean;
  readonly size: keyof typeof buttonSizes;
}

export const ButtonLink = styled.a<ButtonLinkProps>`
  display: inline-block;
  font-weight: 400;
  color: ${colorText} !important;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
  background-color: ${primaryColor};
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: ${({ size }) => (size ? buttonSizes[size] : buttonSizes['md'])};
  line-height: 1.5;
  border-radius: ${buttonBorderRadius};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  ${props => props.disabled && 'pointer-events: none; opacity: 0.7'}

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(${shadowSelected}, 0.5);
  }
  &:hover {
    outline: 0;
    color: #fff;
    background-color: ${backgroundHover};
    border-color: ${backgroundHover};
    text-decoration: none;
  }
`;

export function buttonWithColors<T>(Component: React.ComponentType<T>) {
  return styled(Component)<ButtonLinkProps>`
    display: inline-block;
    font-weight: 400;
    color: ${colorText} !important;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    cursor: pointer;
    background-color: ${primaryColor};
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: ${({ size }: ButtonLinkProps) =>
      size ? buttonSizes[size] : buttonSizes['md']};
    line-height: 1.5;
    border-radius: ${buttonBorderRadius};
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    ${({ disabled }: ButtonLinkProps) =>
      disabled && 'pointer-events: none; opacity: 0.7'}

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(${shadowSelected}, 0.5);
    }
    &:hover {
      outline: 0;
      color: #fff;
      background-color: ${backgroundHover};
      border-color: ${backgroundHover};
      text-decoration: none;
    }
  `;
}
