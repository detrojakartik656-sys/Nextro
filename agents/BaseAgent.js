// ============================================================================
// NEXERO - Multi-Agent AI System
// Base Agent Class - Foundation for all 18 AI Agents
// ============================================================================

class BaseAgent {
  constructor(id, name, capabilities, icon) {
    this.id = id;
    this.name = name;
    this.capabilities = capabilities;
    this.icon = icon;
    this.status = 'idle';
    this.memory = new Map();
    this.taskHistory = [];
    this.aiCore = null;
  }

  /**
   * Set AI Core reference
   */
  setAICore(core) {
    this.aiCore = core;
  }

  /**
   * Execute task - Override in child classes
   */
  async execute(task, context) {
    throw new Error('execute() must be implemented by subclass');
  }

  /**
   * Store in agent memory
   */
  rememberContext(key, value) {
    this.memory.set(key, {
      value,
      timestamp: new Date(),
      accessCount: 0
    });
  }

  /**
   * Retrieve from agent memory
   */
  recall(key) {
    if (this.memory.has(key)) {
      const entry = this.memory.get(key);
      entry.accessCount++;
      return entry.value;
    }
    return null;
  }

  /**
   * Record task execution
   */
  recordTask(task, result, duration) {
    this.taskHistory.push({
      taskId: task.id,
      taskType: task.type,
      result,
      duration,
      timestamp: new Date()
    });

    // Keep last 100 tasks
    if (this.taskHistory.length > 100) {
      this.taskHistory.shift();
    }
  }

  /**
   * Send message to another agent
   */
  async requestFromAgent(agentId, message) {
    if (this.aiCore && this.aiCore.agents.has(agentId)) {
      const agent = this.aiCore.agents.get(agentId);
      return await agent.onMessage(message);
    }
    return null;
  }

  /**
   * Handle incoming message from another agent
   */
  async onMessage(message) {
    return { status: 'received', message: 'Default handler' };
  }

  /**
   * Get agent status
   */
  getStatus() {
    return {
      id: this.id,
      name: this.name,
      status: this.status,
      capabilities: this.capabilities,
      memorySize: this.memory.size,
      taskCount: this.taskHistory.length,
      icon: this.icon
    };
  }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BaseAgent;
}
