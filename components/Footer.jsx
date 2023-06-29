import React, { useEffect } from "react";
import styles from "../styles/Footer.module.css";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";
const Footerr = () => {
  const top = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    function drawing() {
      var canvas,
        ctx,
        circ,
        nodes,
        mouse,
        SENSITIVITY,
        SIBLINGS_LIMIT,
        DENSITY,
        NODES_QTY,
        ANCHOR_LENGTH,
        MOUSE_RADIUS;

      SENSITIVITY = 100;
      SIBLINGS_LIMIT = 100;
      DENSITY = 50; //don't change
      NODES_QTY = 0; //don't change
      ANCHOR_LENGTH = 550;
      MOUSE_RADIUS = 300;

      circ = 1 * Math.PI;
      nodes = [];

      canvas = document.querySelector("canvas");
      resizeWindow();
      mouse = {
        x: canvas.width / 2, //2
        y: canvas.height / 0,
      };
      ctx = canvas.getContext("2d");
      if (!ctx) {
        alert("Ooops! Your browser does not support canvas :'(");
      }

      function Node(x, y) {
        this.anchorX = x;
        this.anchorY = y;
        this.x =
          Math.random() * (x - (x - ANCHOR_LENGTH)) + (x - ANCHOR_LENGTH);
        this.y =
          Math.random() * (y - (y - ANCHOR_LENGTH)) + (y - ANCHOR_LENGTH);
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
        this.energy = Math.random() * 10;
        this.radius = Math.random();
        this.siblings = [];
        this.brightness = 1;
      }

      Node.prototype.drawNode = function () {
        var color = "#e6e4e480";
        ctx.beginPath();
        ctx.arc(
          this.x,
          this.y,
          2 * this.radius + (0.5 * this.siblings.length) / SIBLINGS_LIMIT,
          0,
          circ
        );
        ctx.fillStyle = color;
        ctx.fill();
      };

      Node.prototype.drawConnections = function () {
        for (var i = 0; i < this.siblings.length; i++) {
          var color = "#e6e4e480";
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.siblings[i].x, this.siblings[i].y);
          ctx.lineWidth =
            1 - calcDistance(this, this.siblings[i]) / SENSITIVITY;
          ctx.strokeStyle = color;
          ctx.stroke();
        }
      };

      Node.prototype.moveNode = function () {
        this.energy -= 1;
        if (this.energy < 1) {
          this.energy = Math.random() * 80;
          if (this.x - this.anchorX < -ANCHOR_LENGTH) {
            this.vx = Math.random() * 2;
          } else if (this.x - this.anchorX > ANCHOR_LENGTH) {
            this.vx = Math.random() * -2;
          } else {
            this.vx = Math.random() * 4 - 2;
          }
          if (this.y - this.anchorY < -ANCHOR_LENGTH) {
            this.vy = Math.random() * 2;
          } else if (this.y - this.anchorY > ANCHOR_LENGTH) {
            this.vy = Math.random() * -2;
          } else {
            this.vy = Math.random() * 4 - 2;
          }
        }
        this.x += (this.vx * this.energy) / 100;
        this.y += (this.vy * this.energy) / 100;
      };

      function initNodes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        nodes = [];
        for (var i = DENSITY; i < canvas.width; i += DENSITY) {
          for (var j = DENSITY; j < canvas.height; j += DENSITY) {
            nodes.push(new Node(i, j));
            NODES_QTY++;
          }
        }
      }

      function calcDistance(node1, node2) {
        return Math.sqrt(
          Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2)
        );
      }

      function findSiblings() {
        var node1, node2, distance;
        for (var i = 0; i < NODES_QTY; i++) {
          node1 = nodes[i];
          node1.siblings = [];
          for (var j = 0; j < NODES_QTY; j++) {
            node2 = nodes[j];
            if (node1 !== node2) {
              distance = calcDistance(node1, node2);
              if (distance < SENSITIVITY) {
                if (node1.siblings.length < SIBLINGS_LIMIT) {
                  node1.siblings.push(node2);
                } else {
                  var node_sibling_distance = 0;
                  var max_distance = 0;
                  var s;
                  for (var k = 0; k < SIBLINGS_LIMIT; k++) {
                    node_sibling_distance = calcDistance(
                      node1,
                      node1.siblings[k]
                    );
                    if (node_sibling_distance > max_distance) {
                      max_distance = node_sibling_distance;
                      s = k;
                    }
                  }
                  if (distance < max_distance) {
                    node1.siblings.splice(s, 1);
                    node1.siblings.push(node2);
                  }
                }
              }
            }
          }
        }
      }

      function redrawScene() {
        resizeWindow();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        findSiblings();
        var i, node, distance;
        for (i = 0; i < NODES_QTY; i++) {
          node = nodes[i];
          distance = calcDistance(
            {
              x: mouse.x,
              y: mouse.y,
            },
            node
          );
          if (distance < MOUSE_RADIUS) {
            node.brightness = 0.5 - distance / MOUSE_RADIUS;
          } else {
            node.brightness = 0;
          }
        }
        for (i = 0; i < NODES_QTY; i++) {
          node = nodes[i];
          if (node.brightness) {
            node.drawNode();
            node.drawConnections();
          }
          node.moveNode();
        }
        requestAnimationFrame(redrawScene);
      }

      function initHandlers() {
        document.addEventListener("resize", resizeWindow, false);
        canvas.addEventListener("mousemove", mousemoveHandler, false);
      }

      function resizeWindow() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      function mousemoveHandler(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }

      initHandlers();
      initNodes();
      redrawScene();
    }
    drawing();
  });

  return (
    <footer className={styles.footer}>
      <canvas style={{ height: "400px" }} className={styles.canvas}></canvas>
      <div className={styles.container}>
        <div className={styles.footerLeft}>
          <h1>Vertech Digicom</h1>
          {/* <img src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685606216/Vertecdigi/Vertechlogo_yneios.png" alt="" /> */}
          <p>
            {" "}
            Vertech Digicom is a Gurgaon based company with a highly dedicated
            sales and support team. We specialize in helping enterprises across
            multiple industries manage and leverage IT to improve their business
            performance.
          </p>
        </div>
        <div className={styles.footerCenter}></div>

        <div className={styles.footerRight}>
          <div className={styles.footerFirstRight}>
            <div className={styles.footerCall}>
              <h2>CALL</h2>
              <div className={styles.footerDetails}>
                <span>+91-9910992507</span>
              </div>
            </div>
            <div className={styles.footerWrite}>
              <h2>WRITE</h2>
              <div className={styles.footerDetails}>
                <span>sales@vertechdigi.com</span>
              </div>
            </div>
            <div className={styles.footerVisit}>
              <h2>VISIT</h2>
              <div className={styles.footerDetails}>
                <span>
                  941, Sector 47, Gurugram,
                  <br /> Haryana 122001
                </span>
              </div>
            </div>
          </div>
          <div className={styles.miniMenu}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/products/laptop">Products</Link>
              </li>
              <li>
                <Link href="/blogs">Blog</Link>
              </li>
            </ul>
          </div>
          <div className={styles.copyright}>
            <p>&copy;VERTECH DIGICOM 2023. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerr;
