<script>
  // import FileExplorer from "./FileExplorer/Index.svelte";
  import Simulator from "./pages/Simulator.svelte";
  import Editor from "./pages/Editor.svelte";
  import Me from "./components/Me.svelte";

  const TABS = {
    SIM: "SIM",
    EDITOR: "EDITOR",
  };
  let tab = TABS.EDITOR;
</script>

<Simulator visible={tab === TABS.SIM} />
{#if tab === TABS.EDITOR}
  <div class="editor-container">
    <Editor/>
  </div>
{/if}
<nav class="nav nav-tabs">
  <li class="nav-items">
    <a class="nav-link" on:click={() => (tab = TABS.SIM)} href="#">Simulator</a>
  </li>
  <li class="nav-items">
    <a class="nav-link" on:click={() => (tab = TABS.EDITOR)} href="#">Editor</a>
  </li>
  <li>
    <Me />
  </li>
</nav>

<style>
  .editor-container {
    position: fixed;
    top: 0;
    height: calc(100% - 2rem);
    width: 100%;
  }
  .nav {
    position:fixed;
    bottom: 0;
  }
</style>
