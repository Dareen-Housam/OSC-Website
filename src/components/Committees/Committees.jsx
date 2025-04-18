import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Committees.css";

function Committees() {
  return (
    <section className="committees-section">
      <div className="container-fluid px-4">
        <h2 className="committees-heading">Our committees</h2>

        <div className="committees-grid">
          <div className="committee-box tall-box">
            <h3 className="committee-title">Linux</h3>
            <p className="committee-text">
              A place for all Linux enthusiasts. We are a group of enthusiastic
              Linux users who are dedicated to providing a comprehensive guide
              to the Linux Shell, from beginner to advanced levels. Our goal is
              to teach people how to efficiently use the shell, as well as how
              to become familiar with Git and provide information on various
              networking concepts and cyber security.
            </p>
          </div>

          <div className="committee-box large-box">
            <h3 className="committee-title">Science & Tech</h3>
            <p className="committee-text">
              Explore the core of Computer science while mastering various
              Technologies, witness the power of software development and learn
              how to build powerful software at science and tech Committe by
              collaborating on open source team projects and sharing your
              knowledge with your colleagues.
            </p>
          </div>

          <div className="committee-box">
            <h3 className="committee-title">Blender</h3>
            <p className="committee-text">
              We craft wholesome 3D artworks using open-source software like
              Blender. Our passion lies in perfecting textures and colors for
              visual appeal and bringing our models to life with simple
              animations.
            </p>
          </div>

          <div className="committee-box">
            <h3 className="committee-title">UI/UX & Design</h3>
            <p className="committee-text">
              The UX & Designs Committee is a creative team passionate about
              crafting smooth, enjoyable user experiences through thoughtful
              UI/UX design, from user research to prototyping. Beyond digital
              interfaces, we're also the visual force behind all your favorite
              posters, banners, and social media content, proudly using
              open-source tools like Penpot to bring our designs to life in
              collaboration with other teams.
            </p>
          </div>

          <div className="committee-box">
            <h3 className="committee-title">HR</h3>
            <p className="committee-text">
              Excellent decision makers. Our main responsibilities are
              interviewing people aspiring to be in our community, making sure
              they fit for their roles. A HR member joins each committee to make
              sure that everything is going according to plan, Teaching new
              comers how to give an interview, have responsibility and be
              excellent decision makers.
            </p>
          </div>

          <div className="committee-box">
            <h3 className="committee-title">Media</h3>
            <p className="committee-text">
              Here at the Media Committee, a collective of creative minds, we do
              just that. We photograph and direct video scenes based on unique
              ideas, then meticulously edit and montage them, adding awesome
              sound effects and voice-overs to clearly convey the vision. From
              writing scripts to making your wildest scenarios real, our goal in
              Media Committee is to ensure you feel creative, inspired, and
              empowered to share your ideas with the world.
            </p>
          </div>

          <div className="committee-box large-box">
            <h3 className="committee-title">Flutter</h3>
            <p className="committee-text">
              Write once, run anywhere. That's who we are, we write code once
              and this code can be run in Android , IOS , Web and Desktop using
              flutter. Flutter is an open source framework by Google for
              building beautiful, natively compiled, multi-platform applications
              from a single codebase.
            </p>
          </div>

          <div className="committee-box">
            <h3 className="committee-title">Front - END</h3>
            <p className="committee-text">
              A creative space for building interactive and user-friendly web
              interfaces. We focus on modern frontend development using React,
              emphasizing clean design, performance, and best practices to bring
              great user experiences to life.
            </p>
          </div>

          <div className="committee-box tall-box">
            <h3 className="committee-title">PR</h3>
            <p className="committee-text">
              The PR Committee represents the community and helps members
              develop essential soft skills. It focuses on enhancing
              presentation abilities through various techniques, organizing TOT
              sessions for technical committees, managing event logistics, and
              improving content writing to effectively represent the community
              on social media.
            </p>
          </div>

          <div className="committee-box">
            <h3 className="committee-title">Back - END</h3>
            <p className="committee-text">
              The engine behind the web. We specialize in building robust and
              scalable server-side applications using Node.js, focusing on APIs,
              databases, and system architecture to power dynamic and secure web
              solutions.
            </p>
          </div>

          <div className="committee-box">
            <h3 className="committee-title">Game</h3>
            <p className="committee-text">
              Bringing imagination to interactivity. in the game committee, we
              try to learn and teach game design, game programming, game art,
              and game sound design using Godot Game Engine as a tool. also, we
              try to develop 2D and 3D games using what we have learned.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Committees;
