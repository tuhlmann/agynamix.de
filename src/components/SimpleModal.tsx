import React, { Component } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { bpMaxSM } from "../lib/breakpoints"

interface IProps {
  onCloseRequest: () => void
}

const handleKeyUp = (onCloseRequest: () => void) => (e: any) => {
  const keys: any = {
    27: () => {
      e.preventDefault()
      onCloseRequest()
      window.removeEventListener("keyup", handleKeyUp(onCloseRequest), false)
    }
  }

  if (keys[e.keyCode]) {
    keys[e.keyCode]()
  }
}

const handleOutsideClick = (modalRef: React.RefObject<HTMLElement>, onCloseRequest: () => void) => (e: any) => {
  if (modalRef.current && !modalRef.current.contains(e.target)) {
    onCloseRequest()
    document.removeEventListener("click", handleOutsideClick(modalRef, onCloseRequest), false)
  }
}

export const SimpleModal: React.FC<IProps> = ({ onCloseRequest, children }) => {
  const modalRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    window.addEventListener("keyup", handleKeyUp(onCloseRequest), false)
    document.addEventListener("click", handleOutsideClick(modalRef, onCloseRequest), false)
    return () => {
      window.removeEventListener("keyup", handleKeyUp(onCloseRequest), false)
      document.removeEventListener("click", handleOutsideClick(modalRef, onCloseRequest), false)
    }
  })
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        padding: "1rem",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 9999,
        opacity: 1,
        animation: "show .5s ease",
        overflowX: "hidden",
        overflowY: "auto"
      }}
    >
      <div
        css={{
          backgroundColor: "#fff",
          boxShadow: "0 0 0.625rem rgba(0, 0, 0, 0.2)",
          maxWidth: "500px",
          [bpMaxSM]: {
            width: "100%"
          }
        }}
        ref={modalRef}
      >
        <div>{children}</div>
      </div>

      <button
        type="button"
        css={{
          position: "fixed",
          top: 0,
          right: 0,
          background: "#fff",
          width: "2.5rem",
          height: "2.5rem",
          padding: 0,
          border: 0,
          cursor: "pointer",
          outline: 0,
          boxShadow: "0 0 0.625rem rgba(0, 0, 0, 0.2)",
          "&:before, &:after": {
            content: "\"\"",
            position: "absolute",
            top: "1.2rem",
            left: "0.25rem",
            width: "2rem",
            height: "0.1rem",
            backgroundColor: "#888"
          },
          "&:before": {
            transform: "rotate(45deg)"
          },
          "&:after": {
            transform: "rotate(-45deg)"
          },
          "&:hover:before, &:hover:after": {
            backgroundColor: "#444"
          }
        }}
        onClick={onCloseRequest}
      />
    </div>
  )
}
