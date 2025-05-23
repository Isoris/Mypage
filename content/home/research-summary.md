---
widget: research-summary
headless: true
weight: 5
title: "Research & Practical Experience"
subtitle: ""
#subtitle: "My doctoral research contributed to advancements in genome assembly methodologies, vaccine candidate identification, and computational bioinformatics for microbial and fish genomics."

# Research areas to be displayed as tabs
research_areas:
  - title: "Haplotype-Resolved Assembly"
    image: "./img/research-experiences/bighead-catfish-hic.png"  # Path to your catfish image
    image_position: "left"      # Can be left or right
    icon:
      name: dna
      pack: fas
    content: |
      ### Bighead Catfish (*Clarias macrocephalus*)
      We sequenced the genome of the **Thai Bighead Catfish**, native to Thailand and Vietnam, using **PacBio HiFi, Oxford Nanopore, Hi-C, and Illumina sequencing** to construct a **haplotype-resolved diploid genome assembly**.

      #### Key Achievements:
      * First chromosome-scale assembly with 27 pseudo-chromosomes
      * High continuity: N50 = 35.4 Mb
      * High completeness: BUSCO = 95.5%
      * High accuracy: QV50 (~99.999% correctness)

      **NCBI BioProject**: [PRJNA1121957](https://www.ncbi.nlm.nih.gov/bioproject/PRJNA1121957)
      **DOI**: ANDRES, Q. L. S., Singchat, W., & Srikulnath, K. (2025). Haplotype-Resolved Chromosome-scale Assembly of the Bighead Catfish (Clarias macrocephalus) Genome. [https://doi.org/10.5281/zenodo.14826876](https://doi.org/10.5281/zenodo.14826876)
  - title: "F1 Hybrid Assembly"
    image: "./img/research-experiences/hybrid-catfish.png"  # Path to your catfish image
    image_position: "left"      # Can be left or right
    icon:
      name: fish
      pack: fas
    content: |
      ### Hybrid Catfish (*C. macrocephalus × C. gariepinus*)
      We report the **haplotype-resolved genome assembly of a Thai hybrid catfish (F1)**, an **allodiploid** created by crossing two parent species.

      #### Challenge & Solution:
      * **Challenge**: High heterozygosity (>10%) causing fragmented assemblies
      * **Solution**: Applied **Hifiasm Hi-C and HapHiC algorithms** to separate haplotypes

      #### Results:
      * Two phased, haploid-complete parental assemblies
      * 27 chromosomes (*C. macrocephalus*) and 28 chromosomes (*C. gariepinus*)
      * Total genome size: 1.8 Gb with 97% BUSCO completeness

      **NCBI BioProject**: [PRJNA115349](https://www.ncbi.nlm.nih.gov/bioproject/PRJNA115349)
      **DOI**: ANDRES, Q. L. S., Singchat, W., & Srikulnath, K. (2025). Dual Reference Genomes from F1 Hybrids: Phased Assembly of North African Catfish and Bighead Catfish with Hi-C Data. [https://doi.org/10.5281/zenodo.14959133](https://doi.org/10.5281/zenodo.14959133)
  - title: "Microbial Genomics"
    image: "./img/research-experiences/Streptoccus-clusters-ANI-vs-other-species.png"
    image-position: "left"
    icon:
      name: bacteria
      pack: fas
    content: |
      ### *Streptococcus iniae* from Asian Seabass
      Analysis of bacterial isolates from diseased farmed fish to understand pathogenicity and antimicrobial resistance patterns.

      #### Methodologies:
      * Reference-guided de novo assembly
      * Full-length bacterial chromosome reconstruction
      * Multi-reference mapping to pangenome graphs for AMR assessment
      * Analysis of virulence factors and host adaptation

      **NCBI BioProject**: [PRJNA933632](https://www.ncbi.nlm.nih.gov/bioproject/PRJNA933632)
      **DOI**: ANDRES, Q. L. S. (2024). Comparative Genomics and Reverse Vaccinology of Streptococcus iniae from Thai Aquaculture Isolates: A Genomic Approach to Vaccine Development. Zenodo. [https://doi.org/10.5281/zenodo.15264954](https://doi.org/10.5281/zenodo.15264954)
  - title: "Vaccine Development"
    image: "./img/research-experiences/Dual_vaccination.png"
    image-position: "left"
    icon:
      name: syringe
      pack: fas
    content: |
      ### Bacterial Vaccine Development for Nile Tilapia
      Developed vaccines against major pathogens affecting Tilapia aquaculture, including *Streptococcus iniae* and *Aeromonas veronii*.

      #### Approaches:
      * Inactivated whole-cell lipid coated vaccines with optimized adjuvants
      * Validation through challenge studies and immune response profiling
      * Assessment of cross-protection against heterologous strains

      #### Results:
      * Achieved >80% relative percent survival in laboratory trials
      * Identified optimal administration routes and timing
      * Developed practical formulations suitable for field application

      **DOI**: ANDRES, Q. L. S. (2022). Heat-Killed Bivalent Vaccination in Nile Tilapia: A Low-Cost IMM+OR Protocol Protects Against Streptococcus agalactiae and Aeromonas veronii (v1.0). Zenodo. [https://doi.org/10.5281/zenodo.15263492](https://doi.org/10.5281/zenodo.15263492)

  - title: "Reverse Vaccinology"
    image: "./img/research-experiences/SortaseA.png"
    image-position: "left"
    icon:
      name: vial
      pack: fas
    content: |
      ### Computational Vaccine Candidate Discovery
      Applied genomics-driven reverse vaccinology to identify promising vaccine antigens from aquaculture pathogens.

      #### Methodology:
      * Comprehensive in silico prediction of surface-exposed proteins
      * Multi-parameter antigen scoring for immunogenicity potential
      * Structural modeling of candidate antigens
      * Conservation analysis across strain collections
      * Epitope mapping and MHC binding prediction

      #### Key Findings:
      * Identified SortaseA as a promising cross-protective antigen
      * Mapped conserved B-cell and T-cell epitopes
      * Developed recombinant expression systems for top candidates
      * Validated immunogenicity through in vitro and in vivo studies
  - title: "Pangenomics"
    image: "./img/research-experiences/pangenome_matrix_SI_roary.png"
    image-position: "left"
    icon:
      name: project-diagram
      pack: fas
    content: |
      ### Bacterial Pangenome Analysis
      Characterized core and accessory genome components of fish pathogens to understand population structure and virulence mechanisms.

      #### Approaches:
      * Graph-based pangenome construction using multiple reference genomes
      * Classification of core, shell, and cloud genes
      * Functional annotation of lineage-specific elements
      * Identification of mobile genetic elements and horizontal gene transfer
      * Correlation of gene presence/absence with virulence phenotypes

      #### Applications:
      * Identified molecular determinants of host specificity
      * Tracked evolution of antimicrobial resistance
      * Characterized strain-specific virulence factors
      * Developed diagnostic markers for pathotype identification
  - title: "Bioinformatics Skills"
    image: "./img/research-experiences/SortaseA.png"
    image-position: "left"
    icon:
      name: laptop-code
      pack: fas
    content: |
     ### Genome & Transcriptome Analysis
     * **Assembly**: HifiAsm, Flye, Canu, SPAdes, Unicycler
     * **Quality Assessment**: QUAST, BUSCO, Merqury, FastANI
     * **Annotation**: Prokka, PGAP, MAKER
     * **Alignments**: Miniprot, Bowtie2, BWA, BWA-MEM, Minimap2, Winnowmap, VerityMap, VG Giraffe
     * **Comparative Genomics**: IGV, Mauve, Roary, OrthoFinder, PAML
     * **Variant Calling & Rare-Disease Interpretation**:
       * Small variants & polishing – GATK (HaplotypeCaller), DeepVariant, FreeBayes, **Clair3**, **Pilon**
       * Structural variants – bcftools/vcftools, **JasmineSV**
       * Data handling & QC – **Picard**, Truvari
       * Functional annotation – SnpEff, Ensembl VEP
       * Clinical databases – ClinVar / ClinGen
     * **Transcriptome / RNA-seq**: HISAT2, STAR, Salmon, Kallisto, **Trinity** (de novo assembly), RSEM, HTSeq, featureCounts, DESeq2, edgeR
  - title: "Data Visualisation Skills"
    image: "./img/research-experiences/bioinformatics-skills.png"
    image-position: "left"
    icon:
      name: laptop-code
      pack: fas
    content: |
     ### Programming & Analysis
     * **R** (⭐⭐⭐⭐⭐) - Statistical analysis, data visualization, genomic data processing
     * **Bash/Linux** (⭐⭐⭐⭐⭐) - Pipeline automation, HPC job management
     * **Python** (⭐⭐⭐⭐) - Bioinformatics tool development, data processing
     * **Perl** (⭐⭐⭐) - Legacy bioinformatics scripts
     * **C#** (⭐⭐⭐) - Unity prototyping, editor tooling
     * **HPC / SLURM / Docker / Singularity / Mamba / Bioconda** (⭐⭐⭐⭐⭐) - Scalable workflows, containerization, reproducible environments
---

My doctoral research contributed to advancements in **genome assembly methodologies**, **comparative genomics**, and **computational analysis of fish and bacterial genomes**. This work supports aquaculture sustainability, fish breeding programs, and pathogen surveillance.
